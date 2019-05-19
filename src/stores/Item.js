import { observable } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    constructor(name) {
        this.name = name
    }
}
@observer
class Item extends Component {
    // other methods
    render() {
        let item = this.props.item
        return (
            <div> {item.name} </div>)
    }
}

export default Item