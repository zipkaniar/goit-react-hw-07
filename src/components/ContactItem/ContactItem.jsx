import styles from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactContainer}>
      <div>
        <h2 className={styles.contactName}>Name: {contact.name}</h2>
        <p className={styles.contactNumber}>Number: {contact.number}</p>
      </div>

      <button
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}