import React from 'react';
import Cards from './Cards.jsx';
import styled from 'styled-components';

const ViewerBox = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  padding-bottom: 50px;
  background-color: #282c34;
`;
const Title = styled.h1`
  color: #a1a7b3;
`;
const ViewerMain = styled.div`
  img {
    width: 611px;
    height: 350px;
  }
  video {
    width: 611px;
    height: 350px;
  }
`;

//741x425
export default class Viewer extends React.Component {
  mediaCheck(url) {
    if (url) {
      console.log('MEDIA CHECK TRIGGERED');
      if (url.includes('.mp4')) {
        var key = this.props.medias.key;
        return (
          <video key={key.toString()} id="videoPlayer" controls>
            <source src={url} type="video/mp4"></source>
          </video>
        );
      } else if (url.includes('.jpg')) {
        return <img src={url}></img>;
      }
    } else {
      console.log("no more images!")
    }
  }

  render() {
    return (
      <Container>
        <ViewerBox>
          <Title>TITLE</Title>
          <ViewerMain>{this.mediaCheck(this.props.medias.main)}</ViewerMain>
        </ViewerBox>
        <Cards
          medias={this.props.medias.medias}
          onClick={this.props.onClick}
          arrowClick={this.props.arrowClick}
        ></Cards>
      </Container>
    );
  }
}
