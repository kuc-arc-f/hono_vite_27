import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);
//console.log("#Page13.client.ts");
//
const Page13 = {
    /**
     *
     * @param
     *
     * @return
     */  
    getList : async function(): Promise<any>
    {
        try{
            let ret: any[] = [];
            const item = {
            }
            const body = JSON.stringify(item);		
            const res = await fetch("/api/tasks/get_list", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json()
console.log(json);   
            if (res.status !== 200) {
                console.error("error, status <> 200");
                throw new Error(await res.text());
            }
            ret = json;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    },      
    /**
     *
     * @param
     *
     * @return
     */ 
    startProc: async function()
    {
console.log("#Page13.startProc");
        const res = await this.getList();
        const li = [];
        const data = res.data;
        //console.log(data);
        data.forEach((element) => {
            li.push(html`
            <div>
                <h3 class="text-3xl font-bold">${element.title}</h3>
                <p>id: ${element.id}</p>
                <hr class="my-2" />
            </div>
            `
            );
        });
        render(li, document.getElementById("root"));
    },

}
Page13.startProc();
export default Page13;