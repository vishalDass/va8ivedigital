import React from "react";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";

import CollectionHolder from "../components/collectionHolder";
import Link from "next/link";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collectionsUI: false, val: null };
  }

  static async getInitialProps() {
    const response1 = await fetch(
      "https://developers.zomato.com/api/v2.1/categories",
      {
        headers: {
          "user-key": "477646bb6cbda47c85e1f1fb90afb556",
          Accept: "application/json"
        }
      }
    );

    const response2 = await fetch(
      "https://developers.zomato.com/api/v2.1/cities?city_ids=280%2C281%2C282%2C283%2C284%2C285%2C286%2C287%2C288%2C289%2C290",
      {
        headers: {
          "user-key": "477646bb6cbda47c85e1f1fb90afb556",
          Accept: "application/json"
        }
      }
    );

    const result = await Promise.all([response1.json(), response2.json()]);
    console.log("response array", result);

    return result;
  }

  handlechange = async event => {
    var val = event.target.value;
    const url = `https://developers.zomato.com/api/v2.1/collections?city_id=${val}`;
    const res = await fetch(url, {
      headers: {
        "user-key": "477646bb6cbda47c85e1f1fb90afb556",
        Accept: "application/json"
      }
    });

    const result = await res.json();
    console.log("result", result);

    if (result != null) {
      this.setState({ collectionsUI: true, val: result });

      console.log("Indexpage state", this.state.val);
      // console.log(
      //   "state values",
      //   this.state.collectionsUI,
      //   this.state.values.collections
      // );
    }
  };

  createImage = collectionsResponse => {
    return (
      <CollectionHolder
        id={collectionsResponse.collection.collection_id}
        image_url={collectionsResponse.collection.image_url}
        title={collectionsResponse.collection.title}
        description={collectionsResponse.collection.description}
        key={collectionsResponse.collection.image_url}
      />
    );
  };

  createImages = images => {
    return images.map(this.createImage);
  };

  render() {
    const style = {
      backgroundImage: "url(/static/assets/template/listed/images/hero_1.jpg)",
      backgroundPosition: "50% -61.5px"
    };

    {
      var catItem = this.props[0].categories.map(cat => (
        <option key={cat.categories.id} value={cat.categories.id}>
          {cat.categories.name}
        </option>
      ));
    }

    let locItem = this.props[1].location_suggestions.map(cat => (
      <option value={cat.id}>{cat.name}</option>
    ));

    return (
      <Layout>
        <div>
          <Link href="/explore">
            <a>test</a>
          </Link>
        </div>
        <div
          className="site-blocks-cover overlay"
          style={style}
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-10">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-8 text-center">
                    <h1>
                      {this.props.data}
                      Find Nearby
                      <span className="typed-words"></span>
                    </h1>
                    <p data-aos-delay="100">
                      Explore top-rated attractions, activities and more!
                    </p>
                  </div>
                </div>

                <div className="form-search-wrap p-2" data-aos-delay="200">
                  <form method="post">
                    <div className="row align-items-center">
                      <div className="col-lg-12 col-xl-4 no-sm-border border-right">
                        <div className="wrap-icon">
                          <select
                            className="form-control"
                            name=""
                            id=""
                            onChange={this.handlechange}
                          >
                            {locItem}
                          </select>
                          <span className="icon icon-room"></span>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-3">
                        <div className="select-wrap">
                          <span className="icon">
                            <span className="icon-keyboard_arrow_down"></span>
                          </span>
                          <select
                            className="form-control"
                            name=""
                            id=""
                            onChange={this.handlechange}
                          >
                            {catItem}
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12 col-xl-3">
                        <div className="select-wrap">
                          <span className="icon">
                            <span className="icon-keyboard_arrow_down"></span>
                          </span>
                          <select
                            className="form-control"
                            name=""
                            id=""
                            onChange={this.handlechange}
                          >
                            {/* {this.props.categories.map(cat => (
                              <option value={cat.categories.id}>
                                {cat.categories.name}
                              </option>
                            ))} */}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-2 ml-auto text-right">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Search"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {this.state.collectionsUI && (
          <div>
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-md-7 text-center border-primary">
                  <h2 className="font-weight-light text-primary">
                    Most Visited Places
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mb-5">
              {this.createImages(this.state.val.collections)}
            </div>
          </div>
        )}

        {/*
    <div className="site-section" data-aos="fade">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Most Visited Places</h2>
            <p className="color-black-opacity-5">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            
            <div className="listing-item">
              <div className="listing-image">
                <img src="\static\assets\template\listed\images\hero_1.jpeg" alt="Image" className="img-fluid"/>
              </div>
              <div className="listing-item-content">
                <a href="#" className="bookmark" data-toggle="tooltip" data-placement="left" title="Bookmark"><span className="icon-heart"></span></a>
                <a className="px-3 mb-3 category" href="#">Stores</a>
                <h2 className="mb-1"><a href="#">Sticky Band</a></h2>
                <span className="address">West Orange, New York</span>
              </div>
            </div>

          </div>
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            
            <div className="listing-item">
              <div className="listing-image">
                <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
              </div>
              <div className="listing-item-content">
                <a href="#" className="bookmark"><span className="icon-heart"></span></a>
                <a className="px-3 mb-3 category" href="#">Restaurants</a>
                <h2 className="mb-1"><a href="#">Sticky Band</a></h2>
                <span className="address">West Orange, New York</span>
              </div>
            </div>

          </div>
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4">
            
            <div className="listing-item">
              <div className="listing-image">
                <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
              </div>
              <div className="listing-item-content">
                <a href="#" className="bookmark"><span className="icon-heart"></span></a>
                <a className="px-3 mb-3 category" href="#">Events</a>
                <h2 className="mb-1"><a href="#">Sticky Band</a></h2>
                <span className="address">West Orange, New York</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    

    
    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Popular Categories</h2>
            <p className="color-black-opacity-5">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>

        <div className="row align-items-stretch">
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-house"></span></span>
              <span className="caption mb-2 d-block">Appartments</span>
              <span className="number">3,921</span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-guitar"></span></span>
              <span className="caption mb-2 d-block">Events</span>
              <span className="number">398</span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-gym"></span></span>
              <span className="caption mb-2 d-block">Fitness</span>
              <span className="number">1,229</span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-shopping-bag"></span></span>
              <span className="caption mb-2 d-block">Department Store</span>
              <span className="number">32,891</span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-mexican-taco"></span></span>
              <span className="caption mb-2 d-block">Restaurants</span>
              <span className="number">29,221</span>
            </a>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mb-lg-0 col-lg-2">
            <a href="#" className="popular-category h-100">
              <span className="icon"><span className="flaticon-cocktail"></span></span>
              <span className="caption mb-2 d-block">Other</span>
              <span className="number">219</span>
            </a>
          </div>
        </div>
      </div>
    </div>
      
    <div className="site-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="images/img_1.jpg" alt="Image" className="img-fluid rounded"/>
          </div>
          <div className="col-md-5 ml-auto">
            <h2 className="text-primary mb-3">Why Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
            <p className="mb-4">Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>

            <ul className="ul-check list-unstyled success">
              <li>Adipisci dolore reprehenderit</li>
              <li>Accusamus dicta laborum</li>
              <li>Delectus sed labore</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div className="site-section bg-light">
      <div className="container">

        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Testimonials</h2>
          </div>
        </div>

        <div className="slide-one-item home-slider owl-carousel">
          <div>
            <div className="testimonial">
              <figure className="mb-4">
                <img src="images/person_3.jpg" alt="Image" className="img-fluid mb-3"/>
                <p>John Smith</p>
              </figure>
              <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
            </div>
          </div>
          <div>
            <div className="testimonial">
              <figure className="mb-4">
                <img src="images/person_2.jpg" alt="Image" className="img-fluid mb-3"/>
                <p>Christine Aguilar</p>
              </figure>
              <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial">
              <figure className="mb-4">
                <img src="images/person_4.jpg" alt="Image" className="img-fluid mb-3"/>
                <p>Robert Spears</p>
              </figure>
              <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial">
              <figure className="mb-4">
                <img src="images/person_5.jpg" alt="Image" className="img-fluid mb-3"/>
                <p>Bruce Rogers</p>
              </figure>
              <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </div>



    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Our Blog</h2>
            <p className="color-black-opacity-5">See Our Daily News &amp; Updates</p>
          </div>
        </div>
        <div className="row mb-3 align-items-stretch">
          <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
            <div className="h-entry">
              <img src="images/hero_1.jpg" alt="Image" className="img-fluid"/>
              <h2 className="font-size-regular"><a href="#">How To List Your Property</a></h2>
              <div className="meta mb-4">by Theresa Winston <span className="mx-2">&bullet;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
            </div> 
          </div>
          <div className="col-md-6 col-lg-6 mb-4 mb-lg-4">
            <div className="h-entry">
              <img src="images/hero_1.jpg" alt="Image" className="img-fluid"/>
              <h2 className="font-size-regular"><a href="#">How To List Your Property</a></h2>
              <div className="meta mb-4">by Theresa Winston <span className="mx-2">&bullet;</span> Jan 18, 2019 at 2:00 pm <span className="mx-2">&bullet;</span> <a href="#">News</a></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center border-primary">
            <h2 className="font-weight-light text-primary">Frequently Ask Question</h2>
            <p className="color-black-opacity-5">Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-8">
            <div className="border p-3 rounded mb-2">
              <a data-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false" aria-controls="collapse-1" className="accordion-item h5 d-block mb-0">How to list my item?</a>

              <div className="collapse" id="collapse-1">
                <div className="pt-2">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum velit excepturi possimus odio dolore molestiae officiis aspernatur provident praesentium.</p>
                </div>
              </div>
            </div>

            <div className="border p-3 rounded mb-2">
              <a data-toggle="collapse" href="#collapse-4" role="button" aria-expanded="false" aria-controls="collapse-4" className="accordion-item h5 d-block mb-0">Is this available in my country?</a>

              <div className="collapse" id="collapse-4">
                <div className="pt-2">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum velit excepturi possimus odio dolore molestiae officiis aspernatur provident praesentium.</p>
                </div>
              </div>
            </div>

            <div className="border p-3 rounded mb-2">
              <a data-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false" aria-controls="collapse-2" className="accordion-item h5 d-block mb-0">Is it free?</a>

              <div className="collapse" id="collapse-2">
                <div className="pt-2">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum velit excepturi possimus odio dolore molestiae officiis aspernatur provident praesentium.</p>
                </div>
              </div>
            </div>

            <div className="border p-3 rounded mb-2">
              <a data-toggle="collapse" href="#collapse-3" role="button" aria-expanded="false" aria-controls="collapse-3" className="accordion-item h5 d-block mb-0">How the system works?</a>

              <div className="collapse" id="collapse-3">
                <div className="pt-2">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti esse voluptates deleniti, ratione, suscipit quam cumque beatae, enim mollitia voluptatum velit excepturi possimus odio dolore molestiae officiis aspernatur provident praesentium.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    
    <div className="py-5 bg-primary">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="mb-2 text-white">Let's get started. Create your account</h2>
            <p className="mb-4 lead text-white-opacity-05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, fugit?</p>
            <p className="mb-0"><a href="booking.html" className="btn btn-outline-white text-white btn-md font-weight-bold">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
*/}
      </Layout>
    );
  }
}
