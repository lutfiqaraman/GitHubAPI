import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './repository';
import * as lodash from 'lodash';

let svc = new GithubApiService();

if (process.argv.length < 3)
    console.log('Please pass the username as an argument');
else {
    let username = process.argv[2];

    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
    
            let sortedRepos   = lodash.sortBy(repos, [(repo: Repo) => repo.size]);
            let filteredRepos = lodash.take(sortedRepos, 3); 
    
            user.repos = filteredRepos;
    
            console.log(user);
        });  
    });
}    

