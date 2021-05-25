import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCategories1621890655557 implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'gen_random_uuid()' },
          { name: 'name', type: 'varchar'},
          { name: 'description', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.dropTable('categories')
  }
}
