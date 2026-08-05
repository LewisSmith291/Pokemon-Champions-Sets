import Pokeball from '@/assets/images/Pokeball-icon.svg'


export default function Loading() {
  return (
    <div className="flex flex-1 flex-col gap-6 justify-center items-center">
      <img className="animate-wiggle size-48" src={Pokeball}/>
    </div>
  )
}