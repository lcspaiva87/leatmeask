import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styled/room.scss';
type FirebaseQuestion = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighLighted: boolean,
  isAnswered: boolean,
}>
type Roomparams = {
  id: string;
}
type Question = {
  id: string,
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighLighted: boolean,
  isAnswered: boolean,
}
export function Room() {

  const params = useParams<Roomparams>()
  const { user } = useAuth();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const [question, setQuestions] = useState<Question[]>([])
  const [title, setTitle] = useState('')


  useEffect(() => {
    const roomRef = database.ref(`room/${roomId}`)
    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestion = databaseRoom.questions ?? {}
      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighLighted: value.isHighLighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value ?? {}).length,
            likeId: Object.entries(value ?? {}).find(
              ([key, like]) => 'authorId' === user?.id
            )?.[0],
          };
        }
      );
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId])
  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }
    if (!user) {
      throw new Error('you must be logged is')
    }
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighLighted: false,
      isAnswered: false,
    }
    await database.ref(`rooms/${params.id}/questions`).push(question);
    setNewQuestion('')
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Leatmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} perguntas</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que Voce que perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">

            {user ? (<div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div>) : (<span>Para enviar uma pergunta, <button>faça seu login.</button> </span>)}
            <Button type="submit" disabled={!user}>Enviar Pergunta</Button>
          </div>
        </form>

      </main>
    </div>
  );
}