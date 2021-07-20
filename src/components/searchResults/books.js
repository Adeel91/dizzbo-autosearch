import React from "react";
import {Card} from "react-bootstrap";

const BooksResults = ({element, index}) => {
    return <div key={index}>
        <Card>
            <div className="content">
                <div className="info">
                    <h6 className="title">{element.title}</h6>
                    <Card.Subtitle>{element.author}</Card.Subtitle>
                    <span className="text">Faucibus vitae aliquet nec ullamcorper sit amet. Eget dolor morbi non arcu risus sectetur elitfi...</span>
                </div>
                <div className="book-picture">
                    <Card.Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA4VBMVEX////85o/R0dEAANb81Fz8+N0AAO4AAFQAAAAAAG4AAJ3Kybl5eF0gIWJ1YxlcTW2Xl6sqNoUAUrSooHomHTl4c6V8g6AjI1BJRKJyYmUAO7IOCDiUhE66pFYgN05Zg8wCTH5RRyIZhdkAT5m4uM5gYKFPSHuAqdycrNqQkci4qaL2+Lr5+qVNRU2jgaVqSyvyzbrctIiXlpgSABcjAADc2Fg0ADZ0THW7wk+fjjLHnoaHmIvZt1H5+WXU1arb24NydMThzZL/16y5uYMwMLz//4Y3Od0lGGnBkSnWpyePaUgy13A+AAAEGklEQVRYhdVX72PaNhCVZc7EFhk4rl0IZemoYY3MNuOOLglg4gDNmv//D+pJ/iWR0LD40+4DAaH37r27k0wI+R8G65w3wtNf2t1eE3yn7V7QBgTeO/8iaIBn7/sXbgM8ORv4l00MDD+Mfm1iwG9fffytCX4YjD81aGE4nFyNJ2/H0+H093GTDrTffx67DTpgt6/HTUbIH36+Gk/fjqdnHzpj+3QDlFLOOY1ms1kUUp6QP8I//7LDk+GcxTEhEM8Xk74fUUqSd+GXv0/FUy7QecDCNBe49HXwz9dTJ0iBY+wvzRtCure3X9DHSfA70D5HHXMZ0c7q7IyQJEmwNq+pP1xam+aarEYJkVDK+M/hMn29R4AW5nLmUUJla/Klo3Cef1vsKfany/6Glqv4wq+PwOcxE2kIw6YRNdPaWUKlB19fGkd+9wDAOCMsYUToUIWCJzuZ6xEz8fxAAMwBIwHKsEiMl3Cax9rszyoT+OeAgIa0IFhSGAiKCl7s2E+sm4pRmNQZ7jMAAsICMJokdQnrLVtrt6/yYegE1I8AojuBZ+wAXnjY78wt5G/lMtMbMUEJ0fYBUqwg6PByy8Y0N4qJAwlhF8Aw5pCKOrwEx07uzKAaceRg+sFyIyRACTKqDqgetj3z24ZUFgjVD1boGYaxEQSMsjKLJgI2ppXQysKzRthIICSw3IMYxkMPpnUd1RYI9lslCLaCIfdQ5iDaMGWmFUTKIlBfk3CO+CjNTageKhUzqYDSygNwTUJ3mxOw9Egj9n0kKD9RzAJ6I+ijmEZWmdDhYpQuLT9SAQwSTYKbIQFID0zrYyEZCax1VRHpgWoSeACSgbG8D/SwBr5lLapPotlwIMEWRyrVPSgnIt1alqdct2IaU+167HlgRPBwrBFwY1nOvvIglw4a0Y4MwQC1Cc3D5tvlYgOkrisSgDaOAVeG6fmp3twv0tFMSUnF1aM+7Kic5+jhpQMlBK8jfM4RojQCzWpnapIhQRbjtcDKtJqHSJwppb5U9lyVMBUS5CzUHirTBEgcx7zscX7/M1iqEuz6SB30ESOOxReicZSVO5SOyQgHhQSm32wSHbVkcEKN/F1ry4QJTcJ5XcZ6FgW8QGNkKb6sCg5jNEpTlSAYVFVQtJMajljk6PV6nGVZsaISkLKTpQeRHWS6bIA/Deb45vvq0XFsx55Mpn7ieSNPI8iHSUoo0BKeDfq24/ghpm/d7mxBMH20gwCl9PSHfT5MOQHgL50I4cbcxYQOohLE/zvF32717fwsXE8yYNWxclL7XTeH33d7vYR7yTFkEXyaVyEHt1YDTGzv3C5WjfCfJK7jPDMKcOvpznWcvttN+OuwOhJ3BqPvq1Uiaj1F8H/A5mHPs6cnAQ5es3tMAoIfeyeYPRpBk3/q3hI/AL5mY3tqaxDmAAAAAElFTkSuQmCC" />
                </div>
            </div>
        </Card>
    </div>
};

export default BooksResults;
