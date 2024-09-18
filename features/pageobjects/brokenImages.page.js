
const {$} =  require('@wdio/globals')
const Page =  require('./page')

class BrokenImages extends Page{

    get h3BrokenImages(){return $(`//h3[.='Broken Images']`)}
    get listImages(){return $$(`//div[@id='content']//img`)}

    async verifyPage(){
        super.waitElementDisplayed(await this.h3BrokenImages)
        super.verifyElementDisplayed(await this.h3BrokenImages)
    }

    async verifyImageisNotBroken(index){
        let imgURL = await (this.listImages)[index].getAttribute('src')
        imgURL = browser.options.baseUrl + imgURL
        console.log(imgURL)

        try{
            const response = await browser.execute(async (url)=>{
                let response= await fetch(url)
                return response.status
            },imgURL)
            console.log('Fetched URL' + response)

            if (response !== 200) {
                console.error(`Broken image found: ${imgURL}`);
            }
            expect(response).toEqual(200)
        }catch(error){
            console.error(`Error occured ${error}`)
            throw error
        }


    }


}module.exports = new BrokenImages()