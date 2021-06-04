import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




import Posts from '../components/posts/index';
import post from '../components/singlePost/index';
import UpdatePost from '../components/singlePost/updatePost'
import UpdateComment from '../components/singlePost/updateComment'
export default function AppRoute() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Posts} />
                <Route Route exact path='/posts/:id' component={post} />
                <Route Route exact path='/edit/:id' component={UpdatePost} />
                <Route Route exact path='/posts/:postId/edit/:id' component={UpdateComment} />

            </Switch>
        </Router>

    )
} 
