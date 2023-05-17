git filter-branch --commit-filter --force '
if [ "$GIT_COMMITTER_EMAIL" = "14DDDDDD@qq.com" ];
then
    GIT_COMMITTER_NAME="FourteenDP";
    GIT_AUTHOR_NAME="FourteenDP";
    GIT_COMMITTER_EMAIL="FourteenDP@qq.com";
    GIT_AUTHOR_EMAIL="FourteenDP@qq.com";
    git commit-tree "$@";
else
    git commit-tree "$@";
fi' HEAD
