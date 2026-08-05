import Loading from "@/components/shared/Loading"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col gap-6 justify-center items-center">
      <Loading/>
      <h1 className="font-rockwell">Page not found</h1>
    </div>
  )
}