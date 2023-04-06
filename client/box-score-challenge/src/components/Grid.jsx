import { useRef, useEffect } from 'react'

const Grid = () => {

const ElementRef = useRef(null)


useEffect(() => {
    let elementCount = ElementRef.current.childNodes.length-13;
    console.log(elementCount)
}, [])

    
    return (
        <section className = "grid__container">
            {/*  */}
            <div className = "container" ref = {ElementRef}>
                {/* 3 rows, variable columns */}
                <label></label>
                <div className="container--box-1"> 1</div>
                <div className="container--box-2"> 2</div>
                <div className="container--box-3"> 3</div>
                <div className="container--box-4"> 4</div>
                <div className="container--box-4"> 5</div>
                <div className="container--box-4"> 6</div>
                <div className="container--box-4"> 7</div>
                <div className="container--box-4"> 8</div>
                <div className="container--box-4"> 9</div>
                <span>R</span>
                <span>H</span>
                <span>E</span>
                <label>CHC</label>
                <div className="container--box-1"> 0 </div>
                <div className="container--box-2"> 1 </div>
                <div className="container--box-3"> 0 </div>
                <div className="container--box-4"> 1 </div>
                <div className="container--box-4"> 2 </div>
                <div className="container--box-4"> 0 </div>
                <div className="container--box-4"> 0 </div>
                <div className="container--box-4"> 1 </div>
                <div className="container--box-4"> 0</div>
                <span>5</span>
                <span>2</span>
                <span>1</span>
                <label>BOS</label>
                <div className="container--box-1"> 0 </div>
                <div className="container--box-2"> 0 </div>
                <div className="container--box-3"> 0 </div>
                <div className="container--box-4"> 2 </div>
                <div className="container--box-4"> 0 </div>
                <div className="container--box-4"> 0 </div>
                <div className="container--box-4"> 1 </div>
                <div className="container--box-4"> 2 </div>
                <div className="container--box-4"> 1</div>
                <span>2</span>
                <span>2</span>
                <span>1</span>
                {/* pitchers information, 3 divs that take up equal amounts */}
            <div className = "container--pitcher">
                <div className = ""> Pitcher1</div>
                <div className = ""> Pitcher2</div>
                <div className = ""> Pitcher3</div>
            </div>
            </div>
        </section>
    )
}

export default Grid;