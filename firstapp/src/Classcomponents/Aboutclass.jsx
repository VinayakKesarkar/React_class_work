import { Component } from "react";

class Aboutclass extends Component {
    render() {
        return(
            <p>React is a popular JavaScript library developed by Facebook 
                for building user interfaces, especially single-page applications
                 where fast rendering and smooth user experience are crucial. 
                 It focuses on creating reusable UI components, which makes 
                 development more efficient and maintainable. One of its core ideas
                  is the virtual DOM: instead of updating the real DOM directly, 
                  React creates a lightweight copy in memory and updates only the 
                  parts that change, leading to faster performance.</p>
        );
    }
}

export default Aboutclass;