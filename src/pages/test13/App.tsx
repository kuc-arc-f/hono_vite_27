import React from 'react';
import { marked } from 'marked';
import Layout from '../layout';
//
export default function Page(props: any) {
//console.log(content);
    //
    return (
    <Layout>
        <div>
            <h1 className="text-4xl font-bold">Test13</h1>
            <hr className="my-2" />
            <div className="col-md-6 text-end">
                {/*
                <button className="btn btn-sm btn-outline-purple" 
                >Clear</button>
                */}
                <span className="search_key_wrap">
                <input type="text" 
                className="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
                name="searchKey" id="searchKey"
                placeholder="Title search" />
                </span>                
                <button className="ms-2 btn-outline-purple" id="btn_search"
                >Search</button>
            </div>
            <hr className="my-2" />
            <div id="root"></div>
            {/* JS */}
            {import.meta.env.PROD ? (
                <script type="module" src="/static/Page13.js"></script>
            ) : (
                <script type="module" src="/src/client/Page13.ts"></script>
            )}        
        </div>
    </Layout>
    )
}
/*
<input type="email" id="email" name="email" 
class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500" 
placeholder="johndoe@example.com" required="">
</input>
*/