import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useParams } from "react-router-dom";
import { getIssueDetails } from "../../utils/getIssueDetail";

type PostDetailProps = {
  title: string,
  created_at: string,
  body: string
  user: {
    login: string
  },
  comments: number,
  html_url: string
}

export const PostDetails = () => {
  let { id } = useParams();
  const [postData, setPostData] = useState<PostDetailProps>({
    title: "",
    body: "",
    comments: 0,
    created_at: "",
    html_url: "",
    user: {
      login: "",
    }
  });

  let datePost = new Date (postData.created_at);
  const today = new Date();
  const diferencaEmMilissegundos = Math.abs(today.getTime() - datePost.getTime());
  const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));


  const getPostDetails = async () => {
    const { data } = await getIssueDetails(Number(id));

    setPostData({
      ...postData,
      title: data.title,
      created_at: data.created_at,
      body: data.body,
      comments: data.comments,
      html_url: data.html_url,
      user: {
        login: data.user.login
      }
    })
  }

  useEffect(() => {
    getPostDetails();
  }, [])

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[864px] h-40 bg-base-profile flex p-8 gap-4 flex-col rounded-[10px] -translate-y-1/2">
        {/*HEADER*/}
        <div className="flex justify-between w-full">
          <a href="/" className="text-blue font-bold text-sm flex gap-2 items-center">
            <FontAwesomeIcon icon={faArrowLeft} /> VOLTAR
          </a>
          <a href={postData.html_url} target="_blank" className="text-blue font-bold text-sm flex gap-2 items-center">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        {/* TITLE */}
        <h1 className="text-2xl text-base-title">{postData.title}</h1>
        {/*FOOTER*/}
        <div className="flex gap-6 w-full">
          <span className="flex gap-2 items-center text-base-span">
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            <p>{postData.user.login}</p>
          </span>
          <span className="flex gap-2 items-center text-base-span ">
            <FontAwesomeIcon icon={faCalendar} className="text-base-label" />
            <p>{diferencaEmDias > 1 ? `Há ${diferencaEmDias} dias` : `Há ${diferencaEmDias} dia`}</p>
          </span>
          <span className="flex gap-2 items-center text-base-span">
            <FontAwesomeIcon icon={faComment} className="text-base-label" />
            <p>{postData.comments > 1 ? `${postData.comments} comentários` : `${postData.comments} comentário`}</p>
          </span>
        </div>
      </div>
      <div className="w-[864px] flex flex-col items-center gap-4">
        <p className="text-base-text ">{postData.body}</p>
      </div>
    </section>
  )
}