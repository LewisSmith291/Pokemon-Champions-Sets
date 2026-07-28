import Loading from "../atoms/Loading"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 ">
      <Loading/>
      <h1 className="font-rockwell">Page not found</h1>
    </div>
  )
}