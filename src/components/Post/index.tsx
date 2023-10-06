import { PostProps } from "../../pages/Home"

type PostPropsType = {
  post: PostProps
}

export const Post = ({post}: PostPropsType) => {
  let datePost = new Date (post.created_at);
  const today = new Date();
  const diferencaEmMilissegundos = Math.abs(today.getTime() - datePost.getTime());
  const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return(
    <article className="flex bg-base-post flex-col h-[260px] w-[416px] rounded-[10px] cursor-pointer p-8 gap-[20px] hover:border-2 hover:border-base-label">
      <div className="flex justify-between">
        <h1 className="text-base-title text-xl w-[283px]">{post.title}</h1>
        <span className="text-base-span text-sm">{diferencaEmDias > 1 ? `Há ${diferencaEmDias} dias` : `Há ${diferencaEmDias} dia`}</span>
      </div>
      <div className="overflow-hidden">
        <p className="text-base-text text-md line-clamp-5 overflow-hidden">
          {post.body}
        </p>
      </div>
    </article>
  )
}