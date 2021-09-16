rm -rf db_backup
host=website2-shard-00-00.nes56.mongodb.net:27017,website2-shard-00-01.nes56.mongodb.net:27017,website2-shard-00-02.nes56.mongodb.net:27017
username=$1
passwd=$2
remote_db=whppt_user_guide_draft
local_db=dev


mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection dependencies --type JSON --out db_backup/dependencies.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection domains --type JSON --out db_backup/domains.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection images --type JSON --out db_backup/images.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection news --type JSON --out db_backup/news.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection pages --type JSON --out db_backup/pages.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection site --type JSON --out db_backup/site.json
mongoexport --host $host --ssl --username $username --password $passwd --authenticationDatabase admin --db $remote_db --collection users --type JSON --out db_backup/users.json

mongoimport --host localhost:27017 --db $local_db --collection dependencies --type JSON --file db_backup/dependencies.json
mongoimport --host localhost:27017 --db $local_db --collection domains --type JSON --file db_backup/domains.json
mongoimport --host localhost:27017 --db $local_db --collection images --type JSON --file db_backup/images.json
mongoimport --host localhost:27017 --db $local_db --collection news --type JSON --file db_backup/news.json
mongoimport --host localhost:27017 --db $local_db --collection pages --type JSON --file db_backup/pages.json
mongoimport --host localhost:27017 --db $local_db --collection site --type JSON --file db_backup/site.json
mongoimport --host localhost:27017 --db $local_db --collection users --type JSON --file db_backup/users.json
