import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateSpecifications1621916076973 implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.createTable(
      new Table({
        name: 'specifications',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'gen_random_uuid()' },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'description', type: 'varchar', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'now()' }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {
    await queryRunner.clearTable('specifications')
    await queryRunner.dropTable('specifications')
  }
}