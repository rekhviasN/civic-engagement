import React from 'react';
import Title from 'grommet/components/Title';
import Card from 'grommet/components/Card';

const RepBio = ({ bio, google }) => {

  console.log('repbio: ', bio, google);
  // static info is available via props.rep
  const { title } = bio.roles[0];
  const { first_name, middle_name, last_name } = bio;
  const first = `${first_name} ${middle_name}`;

  return (
    <div className="rep-bio">
      <img src={google.photoUrl} alt={bio.name} />
      <Title>{ title }</Title>
      <h2>{ first }</h2>
      <h1>{ last_name }</h1>
    </div>
  );
};

export default RepBio;
