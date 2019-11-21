import {Col, Row, Calendar} from 'antd';
import * as React from 'react';
import './index.scss';

export default class Home extends React.Component {

    // private attain = async () => {
    //
    //     const promise = API.attainUser();
    //     console.log(promise);
    // };

    // private getKuaiDiInfo = async () => {
    //     const promise = API.getKuaiDiInfo();
    //     console.log(promise)
    // }

    private onPanelChange = async (value, mode) => {
        console.log(value, mode);
    }

    public render() {
        let div = (
            <div className='outline'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Calendar onPanelChange={this.onPanelChange}/>
                    </Col>
                </Row>
            </div>
        );
        return div;
    }


}
