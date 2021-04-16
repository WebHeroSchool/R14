import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
//import { Subtitles } from '@material-ui/icons';
import styles from './About.module.css';


const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: {},
		userStatus: null,
      	repoStatus: null
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'SanSanKon'
		}).then(({ data, status }) => {
			this.setState({
				repoList: data,
				isLoading: false,
				repoStatus: status
			});
		}).catch((error) => {
			this.setState({
				isLoading: false,
				repoStatus: error.status
			})
		})

		octokit.rest.users.getByUsername({
			username: 'SanSanKon'
		}).then(({ data, status }) => {
			this.setState({
				userInfo: data,
				isLoading: false,
				userStatus: status
			});
		}).catch((error) => {
			this.setState({
				isLoading: false,
				userStatus: error.status
			})
		})
	}

	render() {
		const { isLoading, repoList, userInfo, userStatus, repoStatus } = this.state;

		return (
			<CardContent className = {styles.card}>
		    <h1>{ isLoading ? <CircularProgress /> : 'About me' }</h1>
          {!isLoading && userStatus === 200 &&
		  	<div>
          <img src={userInfo.avatar_url} alt="User-face" className={styles.img}></img>
					<p className={styles.login}>{userInfo.login}</p>
					<p className={styles.text}>{userInfo.bio}</p>
			  </div>}
        
        {!isLoading && userStatus !== 200 && <p>User information did not receive</p>}
        
        <h2>{ isLoading ? <CircularProgress /> : 'My repositories' }</h2>
        {!isLoading && repoStatus === 200 && <ol className = {styles.list}>
          {repoList.map(repo => (<li key = {repo.id} className = {styles.item}>
            <a href={repo.html_url} className = {styles.link}>{repo.name}</a>
              </li>))}
            </ol>}
            {!isLoading && repoStatus !== 200 && <p className = {styles.repos}>Error! Information about user repositories did not receive</p>}
	    </CardContent>
		);
	}
}


export default About; 