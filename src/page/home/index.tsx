import {Avatar, Card, List} from 'antd';
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

    public render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            }
        ];
        let div = (
            <div className='outline'>
                <Card title="提示信息" bordered={false} style={{ width: 480 }} >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        );
        return div;
    }


}
