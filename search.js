const Node = require('./node.js')
const Agenda = require('./agenda.js')
const Explored = require('./explored.js')

exports.search = function search(initialState, goalTest, actions, successor, print = true)
{
    const agenda = new Agenda()
    const explored = new Explored()
    const initialNode = new Node(null, initialState, null)
    agenda.add(initialNode)
    while(agenda.notEmpty())
    {
        const parent = agenda.getNode()
        if(goalTest(parent.state))
        {
            if(print) console.log("Solution ",parent.strPath())
            return parent.path()
        }
        else
            if(print) console.log(parent.strPath())


        explored.add(parent.state)
        for(const action of actions(parent.state))
        {
            const newS = successor(parent.state, action)
            const newN = new Node(action, newS, parent)
            if(!explored.hasState(newS))
            {
                agenda.add(newN)
            }
        }
    }
    return null
}