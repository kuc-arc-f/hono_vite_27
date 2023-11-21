
//
import React from 'react';
let title = "Welcome";
//
export default function Page(props: any) {
    return (
    <html>
      <head>
        <title>{title}</title>
        <link href="/static/globals.css" rel="stylesheet" />
        <link href="/static/main.css" rel="stylesheet" />
        <link href="/static/micromodal.css" rel="stylesheet" />
      </head>
      <body>
        <div className="text-center py-2">
          <a href="/">[ home ]</a>
          <a href="/test2"><span className="ps-2">[ Test2 ]</span></a>
          <a href="/test3"><span className="ps-2">[ Test3 ]</span></a>
          <a href="/test4"><span className="ps-2">[ Test4 ]</span></a>
          <a href="/tasks"><span className="ps-2">[ Tasks ]</span></a>
        </div>
        <hr />
        <div className ="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
    )
}
/*
<div class="container mx-auto my-2 px-8 bg-white">{props.children}</div>
*/
