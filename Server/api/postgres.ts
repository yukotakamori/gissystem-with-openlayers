// prismaをインポート
import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {

  // eventオブジェクトを利用してpostリクエスト情報を取得
  // console.log(event.node.req.method);
  // ------------------------------
  // メモ
  // GET：URLの末尾にパラメータ付与
  // POST：メッセージボディ（ユーザーから見えない、データ量に制限なし）
  // ------------------------------
  
  const prisma = new PrismaClient();

  if (event.node.req.method === 'GET') {
    // Prismaを利用しているのでselect文ではなくfindMany
    // linテーブルからデータ取得
    const lins = await prisma.lin.findMany();
    console.log("Get OK")
    return lins;
  }
  
  if (event.node.req.method === 'POST') {
    console.log("POST OK")
    
    const body = await readBody(event);
    // データ登録
    const newData = await prisma.lin.create({
      data: {
        geom: body.lin,
        deleted: false,
      },
    });
    console.log(newData);
    return newData;
  }
});