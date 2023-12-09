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
<div dangerouslySetInnerHTML={{ __html: content }} />
*/