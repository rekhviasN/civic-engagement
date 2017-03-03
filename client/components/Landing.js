import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Hero from 'grommet/components/Hero';
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';
import Headline from 'grommet/components/Headline';
import Animate from 'grommet/components/Animate';
import Form from 'grommet/components/Form';
import SearchInput from 'grommet/components/SearchInput';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVisibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      searchVisibility: true
    });
  }

  render() {
    return (
      <Article scrollStep={true}>

        <Header />

        <Hero background={<Image src={'../media/landing.jpg'} fit="cover" full={true} />}>
          <Box align="center" justify="center">

            <Headline>
              Your personal politics intelligence agency
            </Headline>


            <Box>
              <Button label="Get Started" onClick={this.toggleVisibility} />

              <Animate
                enter={{animation: "slide-up", duration: 1000, delay: 300}}
                visible={this.state.searchVisibility}
              >
                <Box>
                  <Form>
                    <SearchInput />
                  </Form>
                </Box>
              </Animate>

            </Box>


          </Box>
        </Hero>

        <Section></Section>
        <Section></Section>
        <Footer></Footer>
      </Article>
    );
  }
 }

export default Landing;
