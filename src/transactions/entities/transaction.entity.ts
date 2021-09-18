import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2',
}

// export const TransactionCategoryList: string[] =
//   Object.values(TransactionCategory);

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit',
}

// export const TransactionTypeList: string[] = Object.values(TransactionType);

@Table({
  tableName: 'transactions',
  createdAt: 'create_at',
  updatedAt: 'update_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  // @ToNumber
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  // type: TransactionType;
  type: string;

  // @ForeignKey(() => Account)
  // @Column({
  //   type: DataType.UUID,
  //   defaultValue: DataType.UUIDV4,
  //   allowNull: false,
  // })
  // account_id: string;

  // @BelongsTo(() => Account)
  // account: Account;
}
