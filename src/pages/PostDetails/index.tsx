import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faComment,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const PostDetails = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[864px] h-40 bg-base-profile flex p-8 gap-4 flex-col rounded-[10px] -translate-y-1/2">
        {/*HEADER*/}
        <div className="flex justify-between w-full">
          <a href="/" className="text-blue font-bold text-sm flex gap-2 items-center">
            <FontAwesomeIcon icon={faArrowLeft} /> VOLTAR
          </a>
          <a href="/" className="text-blue font-bold text-sm flex gap-2 items-center">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        {/* TITLE */}
        <h1 className="text-2xl text-base-title">JavaScript data types and data structures</h1>
        {/*FOOTER*/}
        <div className="flex gap-6 w-full">
          <span className="flex gap-2 items-center text-base-span">
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            <p>cameronwll</p>
          </span>
          <span className="flex gap-2 items-center text-base-span ">
            <FontAwesomeIcon icon={faCalendar} className="text-base-label" />
            <p>Há 1 dia</p>
          </span>
          <span className="flex gap-2 items-center text-base-span">
            <FontAwesomeIcon icon={faComment} className="text-base-label" />
            <p>5 comentários</p>
          </span>
        </div>
      </div>
      <div className="w-[864px] flex flex-col items-center gap-4">
        <p className="text-base-text ">
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          <p className="text-blue">Dynamic typing</p>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </div>
    </section>
  )
}