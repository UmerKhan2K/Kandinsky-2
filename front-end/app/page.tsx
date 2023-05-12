
import InputField from './InputField'
import  ImageDisplay from './ImageDisplay'
import OptionIcons from './OptionIcons'
import '../public/styles.css';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
      <InputField/>
      <ImageDisplay/>
      <OptionIcons />
      </div>
    </main>
  )
}
