import React from 'react'
import './App.css';
import { carousalImages, productImages } from './assets/data';
import Carousal from './components/carousal';
import Loader from './components/loader';
import Products from './components/products';
import Layout from './layout';

function App() {
  const [loading,setLoading]=React.useState(false);

  React.useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="App">
      <Layout loading={loading}>
        {loading?<Loader/>:
        <>
        <Carousal sliderImages={carousalImages}/>
        <Products productImages={productImages}/>
        </>
        }
       
      </Layout>
    </div>
  );
}

export default App;
