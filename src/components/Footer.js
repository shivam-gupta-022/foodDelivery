import React from 'react'

export default function Footer() {
  return (
    <div><div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
     
      <span className="">© 2022 <i>GoFood</i>, Inc</span>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="/"><svg className="bi" width="24" height="24"><use></use></svg></a></li>
      </ul>
    </footer>
  </div>
  </div>
  )
}
