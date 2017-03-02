import React from 'react';
import Title from 'grommet/components/Title';
import Card from 'grommet/components/Card';

const RepBio = ({ bio, google }) => {

  console.log('repbio: ', bio, google);
  // static info is available via props.rep
  const { title } = bio.roles[0];
  return (
    <Card>
      <img className="rep-photo" src={google.photoUrl} alt={bio.name} />
      <Title>{ title }</Title>
      <h1>{ bio.name }</h1>
    </Card>
  );
};

export default RepBio;
