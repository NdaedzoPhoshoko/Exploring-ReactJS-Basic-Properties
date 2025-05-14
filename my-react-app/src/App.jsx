import Header from './Header'
import Footer from './Footer'
import FriendList from './FriendList'

function App() {
  return(
    /*we will use a fragment tag so that we can return a bundle of elements
    we can also use a div tag but it will add an extra div tag in the html
    we can also use an empty tag but it will not work in some cases
    so we will use fragment tag*/
    <>
    <Header />
    <FriendList />
    <Footer />
    </>
  
  )
}

export default App
