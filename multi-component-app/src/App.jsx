import Input from './components/Input'
import Card from './components/Card';
import Alert from './components/Alert'

function App() {
  return (
    <>
      <h1 className='title'>Login Form</h1>
      <div className='form-container'>
        <Input
            type="text"
            label="First Name"
            placeholder="Enter your first name"
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email address"
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your secure password"
          />
      </div>
      <h1 className='title'>Product List</h1>
      <div className='product-container'>
        <Card 
          imageUrl='https://i5.walmartimages.com/asr/4f2ce747-9a65-4458-b292-4278f98d6468.7d3e91ec73140f64044c715109bfd394.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
          title='Shoyo Hinata'
          price = {50}
          rating = {2}
        />
        <Card 
          imageUrl='https://i5.walmartimages.com/seo/Haikyu-Anime-Chibi-Figure-Kei-Tsukishima-Q-Version-Clay-Figurine-Action-Figures-Accessories-PVC-Statue-Model-Gifts-10CM-Adult-Kids-Gift_8d7a46cd-a577-4d4d-aacb-b75e89ceb1dc.6a8910c1dd3dd12d33b26903a958e691.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'
          title='Tsukishima Kei'
          price = {45}
          rating = {5}
        />
        <Card 
          imageUrl='https://i5.walmartimages.com/seo/Haikyuu-Tobio-Kageyama-Action-Figure-Q-Clay-Kageyama-Hideo-Movable-Face-Changing-Character-Statues-10cm_8bcf0bb5-abbb-4a4c-b57a-830423fad4e8.e925c5dff2d87ee00bacc9a60cc7efe3.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'
          title='Tobio Kageyama'
          price = {40}
          rating = {4}
        />
        <Card 
          imageUrl='https://i5.walmartimages.com/seo/Nendoroid-Haikyu-Asahi-Azumane-Reissue-914-Action-Figure_a2d80c94-4f09-45db-ae60-a8f8b85d4adc.56313bb23eb6a6586f327568d4046b31.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'
          title='Asahi Azumane'
          price = {35}
          rating = {3}
        />
      </div>
      <div className="alert-container">
        <Alert 
          title="Item added to Successfully added to cart!" 
          type="success"
          dismissible={true}
        />
      </div>
    </>
  )
}

export default App;
