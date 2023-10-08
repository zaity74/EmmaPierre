
import '../Home/Index.css'
import MainHeader from '../../components/Header/mainHeader';
import AboutSection from '../../components/sections/about/AboutSection';
import Collections from '../../components/sections/collections/collections';
import TopProduct from '../../components/sections/TopProduct/top_product';
import BlogSection from '../../components/sections/blog/blog';
import BackgroundBody from '../../components/Background/bg_body';
import HomeBanner from '../../components/sections/banner/banner';
import React from 'react';



class Home extends React.Component {
  // Constructor 
  constructor(props){
    super(props);
    this.state = {
      name: true,
      count : 0,
      value : '',
      title : '',
    };
    this.thick = this.thick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Mount and UnMount

  // Methods to change state field behavior
  thick(){  
    console.log(this.state.count + this.state.name)
    this.setState(function(state) {
      return {
            //name : this.state.name === 'frederic' ? 'Olivier' : 'frederic',
            count : this.state.count + 1
      }
    })
    this.setState(function(state) {
      return {
            name : !this.state.name 
            //count : this.state.count + 1
      }
    })
    

  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    this.setState({title: this.state.value})
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();

  }

  render(){
    return (
      <>
        <div className='home-container'>
          <BackgroundBody />
          <HomeBanner backgroundProps={'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
          <MainHeader />
          <AboutSection />
          <Collections />
          <TopProduct />
          <HomeBanner backgroundProps={'https://images.pexels.com/photos/17498772/pexels-photo-17498772/free-photo-of-rock-pierre-accessoire-lumiere-du-soleil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} />
          <BlogSection />
        </div>
      </>
    );
  }

}

export default Home;
