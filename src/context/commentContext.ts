import { createContext } from "react";
import { CommentContextType } from '../dataTypes';




export const CommentContext = createContext< CommentContextType| null>(null);

