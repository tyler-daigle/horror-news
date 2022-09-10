export default function Blogs({ blogs }) {
  return (
    <div>
      <h2>{blogs.title}</h2>
      <p>{blogs.blogSummary}</p>
    </div>
  );
}
