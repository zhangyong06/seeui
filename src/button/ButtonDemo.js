/**
 * @file Button demo
 * @author cgzero(cgzero@cgzero.com)
 * @data 2017-07-05
 */

import {h, Component} from 'preact';
import {Button} from '../index';

export default class ButtonDemo extends Component {
    render() {
        return (
            <div>
                <p className="panel-line">
                    <Button>主要按钮</Button>&nbsp;&nbsp;
                    <Button type="default">默认按钮</Button>&nbsp;&nbsp;
                    <Button disabled>主要按钮（禁用）</Button>&nbsp;&nbsp;
                    <Button type="default" disabled>默认按钮（禁用）</Button>
                </p>
                <p className="panel-line">
                    <Button size="small">主要按钮（小）</Button>
                    &nbsp;&nbsp;
                    <Button size="small" type="default">默认按钮（小）</Button>
                </p>
            </div>
        );
    }
}
