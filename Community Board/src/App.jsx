import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import awningImg from './awning.png'

function Card({title, type, imgurl, link}) {

  return (
    <div className="card-container">

      <div className="card-content">

      {/* <span classname="image">
          {imgurl}
        </span> */}
        <img src={imgurl} className="image"/>        
        
        <p className="title">
          {title}
        </p>

        <p className="type">
          {type}
        </p>


        <a class="button" role="button" href={link} target="_blank">View Here</a>

      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const places = [
    {
      title: "Pinch",
      type: "Food Truck",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipM1Tu8ilbYrOA-wPRLNq2BMAbjaClFhddsDkzIr=s680-w680-h510",
      link: "https://www.google.com/search?q=pinch+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0-lclrvj6rkI_ZLLzXu_eQkSP3KzQ%3A1709368941951&ei=bebiZbzPOcTgp84Pw6mWmA4&ved=0ahUKEwj8uczEl9WEAxVE8MkDHcOUBeMQ4dUDCAk&uact=5&oq=pinch+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg9waW5jaCB1dCBhdXN0aW4yBRAAGIAEMgIQJkjMClAAWPQJcAB4AJABAJgBTqABuAeqAQIxNbgBA8gBAPgBAZgCD6AC5gfCAgQQIxgnwgIQEAAYgAQYigUYQxixAxiDAcICCxAAGIAEGLEDGIMBwgIREAAYgAQYigUYkQIYsQMYgwHCAgoQABiABBgUGIcCwgIMEAAYgAQYigUYQxgKwgILEAAYgAQYigUYkQLCAg0QABiABBiKBRhDGLEDwgIOEAAYgAQYigUYsQMYgwHCAg0QABiABBgUGIcCGMkDwgILEAAYgAQYigUYkgPCAggQABiABBixA8ICCBAAGIAEGJIDwgIGEAAYFhgewgIKEAAYFhgeGA8YCsICCBAAGBYYHhgKwgILEAAYgAQYigUYhgOYAwCSBwIxNQ&sclient=gws-wiz-local#rlfi=hd:;si:10090888912085104236,l,Cg9waW5jaCB1dCBhdXN0aW5ItcXa-OKrgIAIWiMQABABGAAYARgCIg9waW5jaCB1dCBhdXN0aW4qBggCEAAQAZIBF2FzaWFuX2Z1c2lvbl9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVIwTXpSNWRsZFJFQUWqAUYQASoMIghwaW5jaCB1dCgAMh8QASIbuAlGTg0bzD3nLWGSqLMzBJJ1PuipByqUzaXGMhMQAiIPcGluY2ggdXQgYXVzdGlu4AEA,y,CBSjC71Ow9c;mv:[[30.28326907731903,-97.74035848302239],[30.282909122680966,-97.74077531697759]]"
    },
    {
      title: "WCP Chic Fil A",
      type: "On Campus Restaurant",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipMr0OSBkVArptkKYt8fV7oNr4rhu15Z-Qeh6oN3=s680-w680-h510",
      link: "https://www.google.com/search?q=wcp+chic+fil+a&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0_9saZPlzacTQOgJlVxLCvUJo6liQ%3A1709369106159&ei=EufiZcOnCfOFp84PgYyCgAE&ved=0ahUKEwjD-PKSmNWEAxXzwskDHQGGABAQ4dUDCAk&uact=5&oq=wcp+chic+fil+a&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg53Y3AgY2hpYyBmaWwgYTIHEAAYgAQYCjIIEAAYFhgeGAoyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSJALUABYlApwAHgAkAEAmAFOoAHCB6oBAjE0uAEDyAEA-AEBmAIOoALpB8ICBBAjGCfCAhEQABiABBiKBRiRAhixAxiDAcICCxAAGIAEGLEDGIMBwgIFEAAYgATCAgoQABiABBiKBRhDwgIOEAAYgAQYigUYsQMYgwHCAgQQABgDwgIQEAAYgAQYigUYQxixAxiDAcICChAAGIAEGBQYhwLCAgYQABgWGB6YAwCSBwIxNA&sclient=gws-wiz-local#rlfi=hd:;si:14851376460443367295,l,Cg93Y3AgY2hpY2sgZmlsIGEiA4gBAZIBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA;mv:[[30.286858700000003,-97.7365131],[30.284789999999997,-97.7414768]]"
    },
    {
      title: "Kinsolving",
      type: "Residence Dining Hall",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipO7dS4foEvU1pOXPSRUz_y3oVfygh0nN3ytM6zA=s680-w680-h510",
      link: "https://www.google.com/search?q=kinsolving+&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0_CsnsyBtlMsKCVAd9qNrKs2lYd_A%3A1709369184330&ei=YOfiZdjcE5DBp84PwL-Q2Ac&ved=0ahUKEwjYjJa4mNWEAxWQ4MkDHcAfBHsQ4dUDCAk&uact=5&oq=kinsolving+&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIgtraW5zb2x2aW5nIDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIlg1QAFieCHAAeACQAQCYAVmgAaAFqgECMTG4AQPIAQD4AQGYAgugAsoFwgIEECMYJ8ICERAAGIAEGIoFGJECGLEDGIMBwgILEAAYgAQYigUYkQLCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIKEAAYgAQYigUYQ8ICChAAGIAEGBQYhwLCAgcQABiABBgKmAMAkgcCMTE&sclient=gws-wiz-local#rlfi=hd:;si:16579705225841175902,l,CgpraW5zb2x2aW5nSJmy6qHKgoCACFoQEAAYACIKa2luc29sdmluZ5IBEXN0dWRlbnRfZG9ybWl0b3J5qgEzEAEyHxABIhvwhvUKsoQZg5vaACLvDd07THyjyw7kLkYKS2EyDhACIgpraW5zb2x2aW5n4AEA;mv:[[30.29057307731903,-97.73977636750453],[30.290213122680967,-97.74019323249546]]"
    },
    {
      title: "J2",
      type: "Residence Dining Hall",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipPGeGB7qsrydLbOViHBdLUO4Uah4uxJG7-uBzlQ=s680-w680-h510",
      link: "https://www.google.com/search?q=j2+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0_ftoOUgZ_DaI1uIqTKj66AWAj5QA%3A1709369205174&ei=defiZfKgCp3gp84PjpWU6A0&ved=0ahUKEwiyr47CmNWEAxUd8MkDHY4KBd0Q4dUDCAk&uact=5&oq=j2+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIgxqMiB1dCBhdXN0aW4yBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yAhAmMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNI1AdQAFj9BnAAeACQAQCYAUqgAfkFqgECMTK4AQPIAQD4AQGYAgygApwGwgIEECMYJ8ICChAAGIAEGIoFGEPCAgsQABiABBixAxiDAcICCxAAGIAEGIoFGJECwgIKEAAYgAQYFBiHAsICCBAAGBYYHhgKmAMAkgcCMTI&sclient=gws-wiz-local#rlfi=hd:;si:428809096605788567,l,CgxqMiB1dCBhdXN0aW5I5cvtuayPgIAIWhwQABgAGAEYAiIMajIgdXQgYXVzdGluKgQIAhAAkgERYnVmZmV0X3Jlc3RhdXJhbnSqATUQATIfEAEiG9-0i_Vg5X2d5orZhbtf2UHxDkXKgzGwmb0cXTIQEAIiDGoyIHV0IGF1c3RpbuABAA,y,rtzu4bJTFyI;mv:[[30.283005977319036,-97.73668658358127],[30.28264602268097,-97.73710341641872]]"
    },
    {
      title: "Jester City Limits (JCL)",
      type: "Residence Dining Hall",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipOneDZVCTJvnhaIq5Usnk8hLfFXDZlUlDvwNoji=s680-w680-h510",
      link: "https://www.google.com/search?q=jcl+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0-OUlCRGxyn8wPaThnJ-faOKkWegQ%3A1709369235414&ei=k-fiZYP0GOeEp84Pn5e4qAI&ved=0ahUKEwjDicTQmNWEAxVnwskDHZ8LDiUQ4dUDCAk&uact=5&oq=jcl+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg1qY2wgdXQgYXVzdGluMgUQABiABDIFEAAYgAQyAhAmMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGA0islQFQkIsBWMKUAXAAeACQAQCYAU6gAYYHqgECMTS4AQPIAQD4AQGYAg6gAqkHwgIKEAAYgAQYigUYQ8ICBhAAGBYYHsICBBAjGCfCAgsQABiABBiKBRiRAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhAQABiABBiKBRhDGLEDGIMBwgIKEAAYgAQYFBiHApgDAIgGAZIHAjE0&sclient=gws-wiz-local#rlfi=hd:;si:17784515257293916552,l,Cg1qY2wgdXQgYXVzdGluSMPLk67UlYCACFodEAAYABgBGAIiDWpjbCB1dCBhdXN0aW4qBAgCEACSARFidWZmZXRfcmVzdGF1cmFudKoBNhABMh8QASIb4E-FKmGdG39huI0Uh1lcjcvC91g4kFHYfdamMhEQAiINamNsIHV0IGF1c3RpbuABAA,y,HJIb0_ddK54;mv:[[30.28293387731903,-97.73653998373443],[30.28257392268097,-97.73695681626558]]"
    },
    {
      title: "K-Bop",
      type: "Restaurant",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipNNcGc5EGMR46rck86LDqJFhPlGRBiIEq3J_pjk=s680-w680-h510",
      link: "https://www.google.com/search?q=k+bop+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn08kG_BRrCN0DD_hFFgDcJZVR4li7Q%3A1709369269777&ei=tefiZen-LtC0wN4P6eGtgAE&ved=0ahUKEwiprfXgmNWEAxVQGtAFHelwCxAQ4dUDCAk&uact=5&oq=k+bop+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg9rIGJvcCB1dCBhdXN0aW4yBhAAGB4YDUivDFAAWMALcAB4AJABAJgBZaABjQiqAQQxNC4xuAEDyAEA-AEBmAIOoALhB8ICBBAjGCfCAgoQABiABBiKBRhDwgILEAAYgAQYigUYkQLCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIOEAAYgAQYigUYkQIYsQPCAgoQABiABBgUGIcCwgIQEAAYgAQYigUYQxixAxiDAcICBRAAGIAEwgIIEAAYgAQYyQPCAgcQABiABBgNwgIIEAAYHhgNGArCAggQABgWGB4YCsICBhAAGBYYHsICChAAGAgYHhgNGArCAgcQIRgKGKABwgILEAAYgAQYigUYhgOYAwCSBwQxMy4x&sclient=gws-wiz-local#rlfi=hd:;si:8488798478005017654,l,Cg9rIGJvcCB1dCBhdXN0aW5Imsz96YargIAIWicQABABEAIYABgBGAMiD2sgYm9wIHV0IGF1c3RpbioICAIQABABEAKSARFrb3JlYW5fcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSS09TMHRWREpCUlJBQqoBRhABKgwiCGsgYm9wIHV0KAAyHxABIhvaIF2yldkbxBA-fg4sJ39QjBdPJUeza1fQzdEyExACIg9rIGJvcCB1dCBhdXN0aW7gAQA,y,zv6qdXWx_hA;mv:[[30.28304107731903,-97.7421276835067],[30.28268112268097,-97.74254451649327]]"
    },
    {
      title: "Chipotle",
      type: "Restaurant",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipP7-w3B0CwvLkMzLXa-15J9DgbwoNQOpxREMSoE=s680-w680-h510",
      link: "https://www.google.com/search?q=chipotle+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0_F9IY8DWFhFpAPrXzaGJJyYZEuEw%3A1709369293299&ei=zefiZYjvEaO0wN4P2qy0wAY&ved=0ahUKEwjIiZHsmNWEAxUjGtAFHVoWDWgQ4dUDCAk&uact=5&oq=chipotle+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhJjaGlwb3RsZSB1dCBhdXN0aW4yBRAAGIAEMgIQJjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDSPo2UABYmCdwBXgAkAEAmAFpoAH8C6oBBDIyLjG4AQPIAQD4AQGYAhygAvEMqAIKwgIEECMYJ8ICChAAGIAEGIoFGEPCAgsQABiABBiKBRiRAsICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhAQABiABBiKBRhDGLEDGIMBwgIMEAAYgAQYigUYQxgKwgIKEAAYgAQYFBiHAsICCBAAGIAEGMkDwgIHECMY6gIYJ8ICERAAGIAEGIoFGJECGLEDGIMBwgINEAAYgAQYigUYQxixA8ICFBAAGIAEGIoFGJECGLEDGIMBGMkDwgILEAAYgAQYigUYkgPCAggQABiABBiSA8ICDhAAGIAEGIoFGJECGLEDwgIGEAAYFhgemAMCkgcEMjcuMQ&sclient=gws-wiz-local#rlfi=hd:;si:14488177632725976110,l,ChJjaGlwb3RsZSB1dCBhdXN0aW4iA4gBAUid96uH5oCAgAhaIhAAGAAYARgCIhJjaGlwb3RsZSB1dCBhdXN0aW4qBAgCEACSARJtZXhpY2FuX3Jlc3RhdXJhbnSqAUsQASoPIgtjaGlwb3RsZSB1dCgAMh4QASIatjwuDTIXXFT943fgu2aEwbSKCUKeCq_8Pk0yFhACIhJjaGlwb3RsZSB1dCBhdXN0aW7gAQA;mv:[[30.286966699999997,-97.7314983],[30.262434399999997,-97.74263540000001]]"
    },
    {
      title: "Cava",
      type: "Restaurant",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipOrXe6z5UH_4bX4390Vn2g0oeNUDRRwpbhcnxX-=s680-w680-h510",
      link: "https://www.google.com/search?q=cava+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn09DYdnmHVqyHQk9rqUSJAweC6NC9w%3A1709369340805&ei=_OfiZa7mMIm4wN4P5tSY2A4&ved=0ahUKEwiu1OSCmdWEAxUJHNAFHWYqBusQ4dUDCAk&uact=5&oq=cava+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg5jYXZhIHV0IGF1c3RpbjIFEAAYgAQyAhAmMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgNIvw9QnAFYsQ1wAHgAkAEAmAFGoAG2A6oBATe4AQPIAQD4AQGYAgagApQDwgIEECMYJ8ICBhAAGAcYHsICBxAjGLACGCfCAg0QABiABBgNGLEDGIMBwgIHEAAYgAQYDcICCBAAGAUYBxgewgIIEAAYBxgeGAqYAwCIBgGSBwE2&sclient=gws-wiz-local#rlfi=hd:;si:16152516220589411576,l,Cg5jYXZhIHV0IGF1c3RpbkjP16Hhga6AgAhaHhAAEAEYABgCIg5jYXZhIHV0IGF1c3RpbioECAIQAZIBGG1lZGl0ZXJyYW5lYW5fcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VNeU5tSkVNRXRSRUFFqgFDEAEqCyIHY2F2YSB1dCgAMh4QASIa8CcscO51MsuuoLO4CUbJlUFNIkv9OKu-fR8yEhACIg5jYXZhIHV0IGF1c3RpbuABAA,y,0UomGbttJMQ;mv:[[30.288742177319026,-97.74147597139495],[30.288382222680966,-97.74189282860505]]"
    },
    {
      title: "Mozart's Coffee Roasters",
      type: "Coffee Shop",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipMfCRFdwN4sbmBic4ZOZInygT4A-_2wqEXa8xI-=s680-w680-h510",
      link: "https://www.google.com/search?q=mozart%27s+ut+austin&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn095kj3xzq9POJ3deD4Gy9Usru6XAw%3A1709369463269&ei=d-jiZeGNEMLIwN4PtrGQsAY&ved=0ahUKEwihpZe9mdWEAxVCJNAFHbYYBGYQ4dUDCAk&uact=5&oq=mozart%27s+ut+austin&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhJtb3phcnQncyB1dCBhdXN0aW4yBRAhGKABMgUQIRigAUicDVAAWL0McAB4AJABAJgBeaABlQqqAQQxNi4yuAEDyAEA-AEBmAISoALKCsICBBAjGCfCAgoQABiABBiKBRhDwgILEAAYgAQYigUYkQLCAgsQABiABBixAxiDAcICBRAAGIAEwgIIEAAYgAQYsQPCAg0QABiABBiKBRhDGLEDwgIHEAAYgAQYCsICDhAAGIAEGIoFGLEDGIMBwgIIEAAYgAQYyQPCAgsQABiABBiKBRiSA8ICBhAAGBYYHsICCBAAGBYYHhgKmAMAkgcEMTYuMg&sclient=gws-wiz-local#rlfi=hd:;si:13569331606629044653,l,ChJtb3phcnQncyB1dCBhdXN0aW5I66O8IFocEAAQARgAGAIiEm1vemFydCdzIHV0IGF1c3RpbpIBC2NvZmZlZV9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJDTURWNk5XUjNFQUWqAUsQASoPIgttb3phcnQncyB1dCgAMh4QASIawIJTRZPzX-XnWecZe6f1_qv994sG-SXEIq4yFhACIhJtb3phcnQncyB1dCBhdXN0aW7gAQA,y,-T5ifnuALYM;mv:[[30.481505799999997,-97.7828633],[30.284907999999998,-97.80757229999999]]"
    },
    {
      title: "GDC Lucky Lab",
      type: "On Campus Coffee Shop",
      imgurl: "https://lh3.googleusercontent.com/p/AF1QipPH4qpSOz5N7vCELjDWRwusY8yGuEIkqLuMklPS=s680-w680-h510",
      link: "https://www.google.com/search?q=gdc+lucky+lab&sca_esv=245afc22ddb75264&rlz=1C1ONGR_enUS1070US1070&biw=1600&bih=731&tbm=lcl&sxsrf=ACQVn0-cVboKdxpZgbKs4MCFkzO-NC5h4Q%3A1709369515917&ei=q-jiZcXKN6rHp84PmNejoAY&ved=0ahUKEwiFzKTWmdWEAxWq48kDHZjrCGQQ4dUDCAk&uact=5&oq=gdc+lucky+lab&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIg1nZGMgbHVja3kgbGFiMgUQABiABDIGEAAYFhgeMgIQJkj9E1AAWKsTcAB4AJABAJgBWKABygaqAQIxM7gBA8gBAPgBAZgCDaAC_gbCAgQQIxgnwgIREAAYgAQYigUYkQIYsQMYgwHCAgsQABiABBixAxiDAcICEBAAGIAEGIoFGEMYsQMYgwHCAgoQABiABBiKBRhDwgIIEAAYgAQYsQPCAg0QABiABBiKBRhDGMkDwgILEAAYgAQYigUYkgPCAggQABiABBjJA8ICCBAAGBYYHhgKwgILEAAYgAQYigUYhgOYAwCSBwIxMw&sclient=gws-wiz-local#rlfi=hd:;si:12845244667844402181,l,Cg1nZGMgbHVja3kgbGFiIgOIAQFIjZL3vqS5gIAIWhsQABABEAIYABgBGAIiDWdkYyBsdWNreSBsYWKSAQtjb2ZmZWVfc2hvcKoBNhABMh8QASIbvUYsp8r_HL8TvW8uBxQ2Rfv90BGJquNfaN7VMhEQAiINZ2RjIGx1Y2t5IGxhYuABAA;mv:[[30.288701900000003,-97.73621980000001],[30.286081699999997,-97.74239969999999]]"
    }
  ]

  return (
    <div className="body">

      <div className="body-content">

        <img src={awningImg}/>

        <div className="title">
          <p>UT Austin Student Food Spots</p>
        </div>

        <div className="cards">

          {places.map((place) => {return <Card title={place.title} type={place.type} imgurl={place.imgurl} link={place.link}/>} )}

        </div>

      </div>
    </div>
  )
}

export default App
