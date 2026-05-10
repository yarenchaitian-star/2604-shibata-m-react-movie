export const VALIDATION_RULES = {
    username: {
        required: 'ユーザ名は必須です',
        minLength: { value: 8, message: '8文字以上で入力してください' },
        maxLength: {
            value: 15,
            message: '15文字以内で入力してください'
        },
        pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: '半角英数字のみ使用可能です'
        }
    },
    password: {
        required: 'パスワードは必須です',
        minLength: { value: 10, message: '10文字以上で入力してください' },
        pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: '半角英数字のみ使用可能です'
        }
    },
    mail: {
        required: 'メールアドレスは必須です',
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '有効な形式で入力してください' }
    }
};