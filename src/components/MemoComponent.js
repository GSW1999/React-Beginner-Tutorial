import { memo, useState } from "react";
const MemoComponent = () => {
    const [text, setText] = useState('Welcome Memo Comp');

    function memoClickHandler(){
        console.log(`State changed from '${text} to 'Welcome Memo Comp'`)
        setText('Welcome Memo Comp');
    }
    console.log('Memo Component render')
    return (
        <>
        
            <h1>Memo Component</h1>
            <button onClick={memoClickHandler}>Memo Click</button>
        </>
    )
}

export default memo(MemoComponent,()=>false);
