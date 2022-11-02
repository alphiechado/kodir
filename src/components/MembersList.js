import React from "react";

function MembersList({ member }) {
  const { picture, name, location, email } = member;
  return (
    <div className="Userinfo">
      <article className="Card">
          <div className="Userimg">
            <img src={picture.large} alt={name.first}/>
          </div>
          <p>{name.title} {name.first} {name.last}</p>
          <p>{email}</p>
          <p>Location: {location.country}</p>
        </article>
    </div>
  );
}

export default MembersList;