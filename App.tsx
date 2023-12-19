import { Home } from "./src/screens/Home"
import { StatusBar } from "react-native" //barre do celular
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}

