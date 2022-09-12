import React, {useState} from 'react';
import './Layout.scss';
import GameBlock from "../GameBlock/GameBlock";
import GameTitle from "../GameTitle/GameTitle";
import BetSubmit from "../BetSubmit/BetSubmit";
import classNames from "classnames";

const Layout = () => {

    const [isSubmited, setSubmited] = useState(false)
    const [betResult, setBetResult] = useState('')

    return (
        <div className="layout">
            <div className="container">
                <div className="layout__inner">
                    <GameTitle isSubmited={isSubmited} betResult={betResult}/>
                    <div className={classNames("game-blocks-wrapper",  { ["game-blocks-wrapper--submitted"] : isSubmited })}>
                        <GameBlock title="rock"/>
                        <GameBlock title="paper"/>
                        <GameBlock title="scissors"/>
                    </div>
                    <BetSubmit isSubmited={isSubmited}
                               onSubmited={(value: boolean) => setSubmited(value)}
                               onSetResult={(result: string) => setBetResult(result)}/>
                </div>
            </div>
        </div>
    );
};

export default Layout;