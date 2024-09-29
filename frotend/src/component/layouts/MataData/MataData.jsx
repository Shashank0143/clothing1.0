import React from 'react'
import Helmet from "react-helmet";
function MataData({title, description, link}) {
  // console.log("Title: ", title);
  // console.log("Description: ", description);
  // console.log("Link: ", link);
  return (
  <Helmet>
    <meta charSet='utf-8' />
     <title>{title}</title>
     {description && <meta name="description" content={description} />}
     {link && <link rel="canonical" href={link} />}
  </Helmet>
  )
}

export default MataData