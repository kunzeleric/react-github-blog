

export const Post = () => {
  return(
    <article className="flex bg-base-post flex-col h-[260px] w-[416px] rounded-[10px] cursor-pointer p-8 gap-[20px] hover:border-2 hover:border-base-label">
      <div className="flex justify-between">
        <h1 className="text-base-title text-xl w-[283px]">JavaScript data types and data structures</h1>
        <span className="text-base-span text-sm">Há 1 dia</span>
      </div>
      <div className="overflow-hidden">
        <p className="text-base-text text-md line-clamp-5 overflow-hidden">
          Programming languages all have built-in data structures, but these often differ from one language to another. 
          This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
          These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
      </div>
    </article>
  )
}