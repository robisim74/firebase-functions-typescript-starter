import * as admin from 'firebase-admin';

/**
 * DeleteUserData function.
 */
export async function deleteUserDataFunction(user: admin.auth.UserRecord): Promise<void> {
    const db = admin.firestore();

    // Gets user id.
    const uid = user.uid;
    // Gets a new write batch
    const batch = db.batch();

    // Deletion of user data.
    // ...

    await batch.commit()
        .then(() => {
            console.log('Deleted data of user:', uid);
        })
        .catch((error) => {
            console.error('Failed to delete data of user:', uid, 'Error:', error);
        });
}
